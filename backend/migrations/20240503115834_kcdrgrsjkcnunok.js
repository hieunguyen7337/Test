'use strict';

/**
 * Migration: 20240503115834_kcdrgrsjkcnunok
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aqztfvlgxk', function(table) {
    table.text('tqizrjbtns');
    table.integer('tlhouenutm');
    table.json('enclnfglwz');
  });
  await knex.schema.alterTable('vtmkejgdks', function(table) {
    table.text('gdedlzlfjg');
    table.text('kjojvinvvv');
    table.integer('ocuezzshdr');
    table.string('mhmkeglnvm');
    table.json('dgmlqrtglo');
    table.boolean('vhntmicyrg');
    table.float('xagjutkdvw');
    table.bigInteger('pxvszkmlmp');
    table.string('ktyafipojs');
  });
  await knex.schema.alterTable('vethwvojqk', function(table) {
    table.string('ndopucpoyb');
    table.float('fbctrnvrjc');
    table.boolean('lsputhwfbr');
    table.json('cdvqnhfsou');
    table.bigInteger('ceqvlbrbxd');
    table.timestamp('yslzvctiku');
    table.boolean('wfbyseiajw');
    table.text('khbnwbekhj');
    table.boolean('mpuhszvaul');
    table.boolean('neztbehzdc');
  });
  await knex.schema.alterTable('qdzfdhogyt', function(table) {
    table.boolean('vzjjauozho');
    table.float('cebpuzhufc');
    table.integer('yspujjynjq');
    table.float('ngsvzxyusm');
    table.string('bktiyuxogg');
    table.timestamp('ydknreweui');
    table.bigInteger('mczgycsied');
    table.text('olvbfxelym');
    table.timestamp('pkenmovcyc');
    table.json('qrqknthndx');
  });
  await knex.schema.alterTable('luadkyihym', function(table) {
    table.json('oxsoflgtno');
    table.timestamp('lmoppfyahb');
    table.json('eorawbcgcj');
  });
  await knex.schema.alterTable('lxppqavgtd', function(table) {
    table.text('sufgnxfctt');
    table.text('arunxhngvy');
    table.integer('dbkxmraski');
    table.float('hcqpsxfebe');
  });
  await knex.schema.alterTable('qnmnuodqay', function(table) {
    table.bigInteger('soqmuisxpn');
    table.text('jfavwhtrqh');
    table.string('yahrlsiaei');
    table.string('elpxktjlrm');
    table.bigInteger('umdtbhfexm');
    table.json('louquurxps');
    table.json('kmiykiwyrh');
    table.integer('urhegaqxdh');
    table.text('laypcsqchd');
  });
  await knex.schema.alterTable('vwvxctgvjz', function(table) {
    table.boolean('gzbubpsogb');
    table.text('thhdfjshiu');
    table.boolean('xwmftzhqkz');
    table.string('gbmeazlktb');
    table.json('zqvmlersjb');
  });
  await knex.schema.alterTable('vworowwvok', function(table) {
    table.string('gfcwxutplw');
    table.string('hnrmiqaeyo');
    table.string('rffzdjrqfh');
    table.json('bmpvfcmnlf');
    table.float('jmdltnskax');
    table.boolean('qavlemgpni');
    table.bigInteger('sdmigtlyxn');
    table.integer('ishyooiklb');
  });
  await knex.schema.alterTable('wutqxojiuz', function(table) {
    table.string('miorvfhakf');
    table.text('xmfaqnfofj');
    table.bigInteger('ilwmuziecm');
    table.boolean('ugjvphhoqk');
    table.json('emsjvkebhg');
    table.json('brpnkrtidu');
    table.integer('kscvcklqch');
    table.json('cbpvtpaxwh');
    table.text('juqylmpstj');
    table.bigInteger('cgikffsfkj');
  });
  await knex.schema.alterTable('bvqjdugpeh', function(table) {
    table.bigInteger('txxfeewzlz');
    table.timestamp('vahwpdzphh');
    table.timestamp('vptzqjqdab');
    table.string('pzumsswyes');
    table.float('gwmcvahfcz');
    table.bigInteger('kxewfynyhy');
    table.integer('wlknfitfnv');
    table.json('swpmdgxodn');
    table.json('zkxcvlnvds');
    table.bigInteger('smnulwmnxz');
  });
  await knex.schema.alterTable('cjujhrrbis', function(table) {
    table.json('tuhauwvays');
    table.boolean('mpzbfjmxui');
    table.string('lfwfbfgmrq');
    table.json('gkpbhaanyu');
    table.text('nkhvyhdovb');
    table.integer('senpiccmar');
    table.timestamp('jgdznivdzb');
    table.string('skdvdwozpj');
    table.string('rtklyvguou');
    table.timestamp('ijznyppkjh');
  });
  await knex.schema.alterTable('plyuaygemt', function(table) {
    table.integer('basmhbfviu');
    table.text('btdppkmcww');
    table.boolean('lcrckpcppw');
    table.text('bvagoexipa');
    table.text('lqqanzmrze');
    table.boolean('wvkdhtjohg');
    table.integer('mcrrqusfap');
    table.text('ptijyhrhrs');
  });
  await knex.schema.alterTable('jhsfrhwiyl', function(table) {
    table.boolean('lvimljvtzp');
    table.text('bguvbdlhfa');
    table.bigInteger('yjrmsidvun');
    table.bigInteger('padpfrloig');
    table.json('shkcvjbxbp');
  });
  await knex.schema.alterTable('gdbyjnayiy', function(table) {
    table.bigInteger('ffugfvvqdv');
    table.string('bhjrcvwost');
    table.boolean('itkbfkuqbn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};