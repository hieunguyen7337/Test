'use strict';

/**
 * Migration: 20241006005146_ynnykjspddzaots
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vqjofkixxg', function(table) {
    table.json('jgruyfnkod');
    table.bigInteger('pwzupnmido');
    table.text('ahypbgmgiz');
  });
  await knex.schema.alterTable('czlbxxkklt', function(table) {
    table.text('aafsmcgjcb');
    table.text('kkaykkbpgr');
    table.integer('yvjumrfpyb');
    table.json('uaxmxzebjm');
    table.integer('udhheoatqn');
  });
  await knex.schema.alterTable('snnecoxlhx', function(table) {
    table.string('hzelkviqmw');
    table.json('zzdkukkrzb');
    table.bigInteger('rbqzelxwzm');
    table.timestamp('jtmrsjfhgd');
    table.string('elhnymcpfz');
    table.boolean('rrnjlsnwal');
    table.boolean('ysqtyidmfi');
    table.integer('awbeqfuene');
  });
  await knex.schema.alterTable('qxokhkptwi', function(table) {
    table.float('tlwfxmpzvu');
    table.float('bvqnbtersz');
    table.bigInteger('kcxpimeihj');
    table.text('uwoqlclhfs');
    table.float('seithdykbm');
    table.float('ckvxheiebk');
    table.bigInteger('ucjtyyafao');
    table.bigInteger('raxzjeqjly');
    table.boolean('vzsidtmdpp');
  });
  await knex.schema.alterTable('bvhpctsawi', function(table) {
    table.integer('dtmsfamdqq');
    table.text('qbxhxltqxo');
    table.boolean('flrzqdcvkl');
    table.timestamp('vqsbieupbl');
    table.integer('xwpxjyhgwl');
    table.text('poultjvgkk');
    table.text('zcxqmwykka');
    table.float('ovzjybsgqo');
    table.boolean('onhlwpznou');
  });
  await knex.schema.alterTable('luzrydhsyf', function(table) {
    table.boolean('qohzbcmjbo');
    table.bigInteger('aeokebgjbm');
    table.boolean('xmphcmehpe');
    table.json('nvpdlvlfhg');
  });
  await knex.schema.alterTable('kuamjovjvw', function(table) {
    table.text('gvffkfuuca');
    table.json('zbtdqgyote');
    table.float('ptrfyefmfs');
    table.float('wmmlaqtbkg');
    table.float('dzrflsmtyc');
    table.string('hfhfehbhwg');
    table.string('dqfsvqsawv');
    table.string('xeeqccemif');
    table.json('xjqkjwfsny');
  });
  await knex.schema.alterTable('jkklfbjxsc', function(table) {
    table.text('azbwviysvk');
    table.boolean('cvuvjteevo');
    table.json('liivndkhdp');
  });
  await knex.schema.alterTable('qpavacyzli', function(table) {
    table.json('hivykzodwx');
    table.text('yaxknzwuef');
    table.integer('itismzjrxx');
    table.timestamp('kpspsqyzmb');
    table.text('pxiozeyfhw');
    table.float('tftischpye');
    table.json('itowklpdzb');
    table.string('uvjqjsrgux');
  });
  await knex.schema.alterTable('goiotesywt', function(table) {
    table.text('lqpaaozlse');
    table.boolean('ylyvxvqoxi');
    table.timestamp('kurwcfrgzk');
  });
  await knex.schema.alterTable('cejsbmwoqn', function(table) {
    table.string('wqkzxutmtb');
    table.float('dbgplkykyq');
    table.text('shvtbefbcs');
    table.boolean('syydclkiwn');
    table.string('jatpleovhl');
  });
  await knex.schema.alterTable('xuwkhkueze', function(table) {
    table.bigInteger('cxqynqohhl');
    table.integer('msslwfynbm');
    table.boolean('brnfykcjvh');
    table.json('jatgwfqfuo');
    table.bigInteger('jgbbkasvxy');
    table.integer('twthtemoel');
    table.timestamp('wflktohpfh');
    table.string('xpxskzokvz');
    table.string('tefyljudqf');
    table.string('yubvjmrsoa');
  });
  await knex.schema.alterTable('bohczggtxb', function(table) {
    table.string('shysqeaorm');
    table.text('ysarvtigwi');
    table.string('ufjezkuube');
    table.float('bnzoziflak');
    table.boolean('qobvaxgyad');
    table.text('mqcvwqpjiu');
    table.text('vnjgflbayf');
  });
  await knex.schema.alterTable('aggihojqvt', function(table) {
    table.json('dtlsvvhgjl');
    table.text('rkzfdoaanf');
    table.json('grduzagfmz');
    table.string('awizodjaln');
    table.text('qmpmuqnlps');
    table.timestamp('ryllusqdff');
  });
  await knex.schema.alterTable('ptatsjzhwc', function(table) {
    table.text('qegxmgheqf');
    table.timestamp('ajxfewyump');
    table.text('mtrskyrmfl');
    table.text('dtqoxjahpx');
    table.bigInteger('hdkisnxzmg');
    table.json('zjecdqprfv');
    table.text('jzjmpqgdle');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};