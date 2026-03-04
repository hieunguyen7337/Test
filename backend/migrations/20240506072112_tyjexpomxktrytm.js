'use strict';

/**
 * Migration: 20240506072112_tyjexpomxktrytm
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ivjlhnqvsc', function(table) {
    table.float('farecwxldd');
    table.integer('boccoxrikw');
    table.float('lxiadnitjj');
    table.json('adwbsbeush');
    table.string('fgookbpdqj');
    table.string('juvdogdbee');
    table.float('anybjoqgmc');
    table.string('qonqvzuujd');
    table.text('eflkzkrnqu');
  });
  await knex.schema.alterTable('htnxxvefat', function(table) {
    table.string('okxnbwyoqe');
    table.integer('glqgbmhrqy');
    table.text('aobsnstoop');
    table.boolean('edoyttxhfs');
    table.string('yzvnqmzqcy');
    table.text('ylhhhzvzsn');
  });
  await knex.schema.alterTable('vhzrqxexnc', function(table) {
    table.float('onrmxhrbmn');
    table.json('zsgnfxbppo');
    table.float('cxsmetltlt');
    table.float('ooplkbwnom');
    table.timestamp('unyhrwvlat');
    table.boolean('ynxospyitd');
  });
  await knex.schema.alterTable('wszgwmuqdy', function(table) {
    table.string('wrsajjlvao');
    table.text('rcwfgxlsbo');
    table.string('wditvcgxgs');
    table.json('qvhedfcjvv');
  });
  await knex.schema.alterTable('cuaohzvrdo', function(table) {
    table.timestamp('gknagdjzxi');
    table.json('xysojatdbu');
    table.json('mcgkanyrwn');
    table.string('vlewhtybzf');
    table.bigInteger('wvqidaknss');
    table.string('lxrpafeabj');
  });
  await knex.schema.alterTable('ffzkmzfwac', function(table) {
    table.float('ghkxigattv');
    table.integer('rpewbprwnz');
    table.json('xmwbnhiadj');
    table.timestamp('isflwhicze');
    table.string('sudtrngqec');
    table.boolean('clleoeamna');
    table.string('zdpuuapzuu');
    table.boolean('tiwffcgzrn');
  });
  await knex.schema.alterTable('hnipourvkf', function(table) {
    table.integer('flvgcveshh');
    table.integer('obyxryzmxs');
    table.json('rlveztglqw');
  });
  await knex.schema.alterTable('gyscuucdfd', function(table) {
    table.bigInteger('ckmygzezif');
    table.boolean('wqdwlqrdfn');
    table.json('icdjhhkarq');
  });
  await knex.schema.alterTable('usfuzttdtt', function(table) {
    table.json('qfyhnqgatg');
    table.string('xdxsowjvzx');
    table.integer('iomhzfpvig');
    table.bigInteger('bscimnlsva');
    table.integer('qncmeknbzr');
  });
  await knex.schema.alterTable('qojxpokhzg', function(table) {
    table.json('djuihzcqwb');
    table.bigInteger('orfulkqhvj');
    table.json('gwtewirvcw');
    table.text('jomfmbfemq');
    table.string('ljydrkdfjh');
    table.timestamp('anjsfudtbs');
    table.string('niscvlgpkd');
    table.timestamp('xyeyupfrxn');
  });
  await knex.schema.alterTable('omdoagsafe', function(table) {
    table.timestamp('lsqyxtxlvk');
    table.integer('gohzktgkqu');
    table.integer('gymvcqytmy');
    table.text('lnmnpiptjf');
    table.boolean('yswsezemrx');
    table.timestamp('tvvyvpzqyt');
    table.string('tvgryacwyb');
  });
  await knex.schema.alterTable('vemjtygkxd', function(table) {
    table.integer('sbkwjumdyp');
    table.string('alzlyoxohg');
    table.float('hnteksqgsm');
    table.float('axsetujkrl');
    table.string('avvqbzztll');
    table.integer('pohomqsgsx');
    table.float('korqwwdpzn');
    table.boolean('kdghdzfwwb');
    table.json('qyiauqrmox');
    table.timestamp('cbdmhuwrwx');
  });
  await knex.schema.alterTable('wmalpwdaiw', function(table) {
    table.bigInteger('honptezdgy');
    table.text('ogefkyyzvl');
    table.boolean('khqesibpwe');
    table.boolean('kshowfpsau');
    table.json('olqfvrxtoq');
    table.string('qemabghduc');
    table.bigInteger('oypvluriax');
    table.bigInteger('dpuafcxymm');
  });
  await knex.schema.alterTable('mjjbrduoem', function(table) {
    table.float('remkcqlkfr');
    table.json('mctuhupovm');
    table.boolean('ocvnxtrrib');
    table.json('gfntmioyfi');
    table.integer('fycwoivyjt');
    table.string('ulasagmkaq');
    table.text('sswzfqesag');
    table.boolean('ppclrrgxxh');
    table.text('sxldklneub');
    table.json('hvavkguvlm');
  });
  await knex.schema.alterTable('nmgluannvl', function(table) {
    table.float('owzolvmdyl');
    table.json('uzbwpaeviw');
    table.text('hrujvtkuzb');
    table.boolean('bppxdwydgs');
  });
  await knex.schema.alterTable('edbrtsquhe', function(table) {
    table.bigInteger('tnhllijyaz');
    table.float('gqaxlaaheh');
    table.timestamp('mktqoiwdxr');
    table.boolean('dozblthgki');
    table.float('tmdsxkryob');
    table.integer('plttowqlhz');
  });
  await knex.schema.alterTable('tgtvikvjfj', function(table) {
    table.text('ueiyebauhe');
    table.float('espmwnrymw');
    table.string('dysbbjxvyx');
    table.text('tchfhywbqx');
    table.json('eeqmblhckg');
    table.timestamp('jsqkhemray');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};