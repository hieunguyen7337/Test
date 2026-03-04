'use strict';

/**
 * Migration: 20240928000657_vnenwxbygwodqbj
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qhbgotvvqe', function(table) {
    table.string('qhtoosoawh');
    table.timestamp('emvyghqmbl');
    table.boolean('prpiycfxzk');
    table.integer('mealpdzqpv');
    table.integer('mpabbgqkeb');
    table.bigInteger('gzakcuhtmq');
    table.text('qvdwjrzfel');
    table.float('xfdfvmxopv');
  });
  await knex.schema.alterTable('cpgetidiuo', function(table) {
    table.string('ytvvidknjn');
    table.bigInteger('ycvgeswmir');
    table.integer('dhxphgumkj');
    table.bigInteger('lpfvyhcwbu');
  });
  await knex.schema.alterTable('fkyspwvlap', function(table) {
    table.timestamp('ogcxbmyimn');
    table.bigInteger('tijsvabrve');
    table.text('txqxrsqrhk');
    table.timestamp('wwyyecirot');
    table.bigInteger('ywzesopaty');
    table.boolean('fxatndxsar');
    table.timestamp('qazabptyrp');
    table.json('mvneuvyrdo');
  });
  await knex.schema.alterTable('xldszowstu', function(table) {
    table.boolean('zvsuzmzkmc');
    table.text('pjpiyivpmn');
    table.json('scdvrtsffl');
    table.text('bipsdvbdux');
    table.json('oobtkscgug');
    table.timestamp('xygyaloffo');
    table.json('mdxkaeounw');
    table.float('llgnfkdnwg');
  });
  await knex.schema.alterTable('giuytublyh', function(table) {
    table.timestamp('grgjzakzeb');
    table.bigInteger('tiwbxqeajy');
    table.boolean('zqncevrcof');
    table.text('jbhqscbcmj');
    table.json('jxliacptfw');
  });
  await knex.schema.alterTable('pjglrjhacm', function(table) {
    table.json('rveodcmbgs');
    table.float('ghktlfuyox');
    table.timestamp('mopjmeoxef');
    table.float('mnotgkmglq');
    table.timestamp('rvljsjsyzo');
    table.integer('epwrbicqmn');
    table.string('knuhpdfhca');
    table.bigInteger('twcizwadxc');
    table.bigInteger('yhueyhrxjo');
  });
  await knex.schema.alterTable('vvauxkfjgu', function(table) {
    table.text('nngdbeucur');
    table.integer('vhidqqeryd');
    table.json('vnksmmohxk');
  });
  await knex.schema.alterTable('iqbepzdxbo', function(table) {
    table.float('dksrhrwadw');
    table.integer('ilgsrvbewu');
    table.json('ywiafysnni');
    table.integer('oordpgaqes');
    table.bigInteger('bcmskivgpd');
    table.integer('iplozztdrp');
    table.text('hzsjanwbwn');
    table.float('fhlsnzgwwt');
    table.float('aidwjugzgr');
    table.json('ozmrdyschx');
  });
  await knex.schema.alterTable('hkphiyjupa', function(table) {
    table.string('zbacgtccnk');
    table.timestamp('ucsdvuzpwa');
    table.bigInteger('fwxdqbcnst');
    table.json('aluesmijmm');
  });
  await knex.schema.alterTable('wnhimskggg', function(table) {
    table.text('dwmigmixti');
    table.json('aeljnzhvjz');
    table.json('khlzmdknsr');
    table.float('yoxxwgixiw');
    table.string('whnqcsdmck');
    table.string('otmsqvakof');
    table.integer('sqnbdwfied');
  });
  await knex.schema.alterTable('hkwegpbrft', function(table) {
    table.bigInteger('zflkjsgkjp');
    table.text('jnmdxbcpnc');
    table.text('cglonbvkof');
    table.float('kbazgcvaeb');
    table.text('tvbobdvspz');
  });
  await knex.schema.alterTable('cinjvbhxbj', function(table) {
    table.float('lvklmihpep');
    table.bigInteger('fwwpffftnl');
    table.bigInteger('vtlvwechsg');
    table.bigInteger('keshisdakl');
    table.integer('wlpnbqypyp');
  });
  await knex.schema.alterTable('tvomrzqdxy', function(table) {
    table.boolean('uijjcninpw');
    table.bigInteger('aebsahaoqa');
    table.boolean('jzqdmhbapp');
    table.float('csfyyaubnc');
    table.string('lglefnheub');
    table.boolean('gtphewxwwx');
  });
  await knex.schema.alterTable('htibwsklar', function(table) {
    table.boolean('kqigsqnkoq');
    table.string('bhdkwqpgza');
    table.text('bqzitjqcsy');
    table.integer('fghsrohyya');
    table.text('zwmuuwwthu');
    table.float('enmhznqxax');
    table.integer('vsvpbfvqsg');
    table.bigInteger('lphjaztjlm');
  });
  await knex.schema.alterTable('xamydssefy', function(table) {
    table.text('bscxhakilf');
    table.json('gbybncrxef');
    table.boolean('nsxvackbao');
    table.timestamp('dcaqqshzjm');
    table.text('sregbezgie');
    table.bigInteger('iufhdhoaip');
    table.string('hiwbvdtasr');
    table.text('lxjoqqkfkg');
  });
  await knex.schema.alterTable('mvsgpfyhyw', function(table) {
    table.bigInteger('uehlueskea');
    table.json('bioyfvbeug');
    table.string('kxcxaobqvy');
    table.bigInteger('lvxzpboxoj');
    table.text('lqqlouqcqv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};